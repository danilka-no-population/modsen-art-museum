import { ARTIC_API_IMAGE_FILE, ARTIC_API_URL } from '#constants/api';
import {
    APIConfigJSON,
    APIGetPaintingJSONResponse,
    APIGetPaintingListJSONResponse,
    APIPaginationJSON,
    APIPaintingJSON,
    APISearchPaintingsJSONResponse,
    Pagination,
    Painting,
    PaintingList,
    PaintingListResult,
} from '#types/paintings';

const PAINTING_TYPE_ID = 1;

const PAINTING_FIELDS = [
    'id',
    'title',
    'artist_title',
    'artist_display',
    'date_display',
    'place_of_origin',
    'dimensions',
    'credit_line',
    'gallery_title',
    'image_id',
    'is_on_view',
];

function _parsePaginationFromJSON(
    paginationJson: APIPaginationJSON,
): Pagination {
    return {
        total: paginationJson.total,
        limit: paginationJson.limit,
        offset: paginationJson.offset,
        currentPage: paginationJson.current_page,
        totalPages: paginationJson.total_pages,
    };
}

function _parsePaintingFromJSON(
    paintingJson: APIPaintingJSON,
    configJson: APIConfigJSON,
): Painting {
    return {
        id: paintingJson.id,
        title: paintingJson.title,
        artist: paintingJson.artist_title ?? paintingJson.artist_display,
        placeOfOrigin: paintingJson.place_of_origin,
        date: paintingJson.date_display,
        dimensions: paintingJson.dimensions,
        isOnView: paintingJson.is_on_view,
        gallery: paintingJson.gallery_title,
        creditLine: paintingJson.credit_line,
        imageUrl: paintingJson.image_id
            ? `${configJson.iiif_url}/${paintingJson.image_id}/${ARTIC_API_IMAGE_FILE}`
            : '#/assets/images/default-painting.png',
    };
}

export async function getPainting(paintingId: number): Promise<Painting> {
    const response = await fetch(
        `${ARTIC_API_URL}/artworks/${paintingId}?` +
            new URLSearchParams({
                'fields': PAINTING_FIELDS.join(','),
            }),
    );

    if (!response.ok) {
        return Promise.reject(new Error((await response.text()) ?? 'Unknown'));
    }

    const json: APIGetPaintingJSONResponse = await response.json();

    return _parsePaintingFromJSON(json.data, json.config);
}

export async function getPaintingList(
    paintingIds: number[],
): Promise<PaintingList> {
    if (!paintingIds.length) {
        return [];
    }

    const response = await fetch(
        `${ARTIC_API_URL}/artworks?` +
            new URLSearchParams({
                'fields': PAINTING_FIELDS.join(','),
                'ids': paintingIds.join(','),
            }),
    );

    if (!response.ok) {
        return Promise.reject(new Error((await response.text()) ?? 'Unknown'));
    }

    const json: APIGetPaintingListJSONResponse = await response.json();

    return json.data.map((paintingJson) =>
        _parsePaintingFromJSON(paintingJson, json.config),
    );
}

export async function searchPaintings(
    searchQuery?: string,
    limit?: number,
    page?: number,
): Promise<PaintingListResult> {
    const response = await fetch(
        `${ARTIC_API_URL}/artworks/search?` +
            new URLSearchParams({
                'query[term][artwork_type_id]': PAINTING_TYPE_ID.toString(),
                'fields': PAINTING_FIELDS.join(','),
                'limit': limit?.toString() ?? '',
                'page': page?.toString() ?? '',
                'q': searchQuery ?? '',
            }),
    );

    if (!response.ok) {
        return Promise.reject(new Error((await response.text()) ?? 'Unknown'));
    }

    const json: APISearchPaintingsJSONResponse = await response.json();

    return {
        pagination: _parsePaginationFromJSON(json.pagination),
        paintingList: json.data.map((paintingJson) =>
            _parsePaintingFromJSON(paintingJson, json.config),
        ),
    };
}
