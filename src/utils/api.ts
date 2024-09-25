import { ARTIC_API_IMAGE_FILE, ARTIC_API_URL } from '#constants/api';
import {
    APIConfigJSON,
    APIGetPaintingJSONResponse,
    APIGetPaintingListJSONResponse,
    APIPaintingJSON,
    Painting,
    PaintingList,
} from '#types/paintings';

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
            : '/image/default.svg',
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
