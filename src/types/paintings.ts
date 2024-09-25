export type Painting = {
    id: number;
    title: string;
    artist: string | null;
    placeOfOrigin: string | null;
    date: string;
    dimensions: string;
    isOnView: boolean;
    gallery: string | null;
    creditLine: string;
    imageUrl: string;
};

export type PaintingList = Painting[];

export type APIPaintingJSON = {
    id: number;
    title: string;
    artist_title: string | null;
    artist_display: string | null;
    place_of_origin: string | null;
    date_display: string;
    dimensions: string;
    is_on_view: boolean;
    gallery_title: string | null;
    credit_line: string;
    image_id: string;
};

export type APIPaintingListJSON = APIPaintingJSON[];

export type APIConfigJSON = {
    iiif_url: string;
};

export type APIGetPaintingJSONResponse = {
    data: APIPaintingJSON;
    config: APIConfigJSON;
};

export type APIGetPaintingListJSONResponse = {
    data: APIPaintingListJSON;
    config: APIConfigJSON;
};
