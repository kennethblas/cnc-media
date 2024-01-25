export interface FilterOptionsModel {
    displayName: string;
    value: string;
    color: string;
}

export const FilterCategoryOptions: FilterOptionsModel[] = [
    { displayName: 'Music', value: 'music', color: 'magenta' },
    { displayName: 'Gaming', value: 'gaming', color: 'red' },
    { displayName: 'Funny', value: 'funny', color: 'orange' },
    { displayName: 'News', value: 'news', color: 'gold' },
    { displayName: 'Trends', value: 'trends', color: 'lime' },
    { displayName: 'Shorts', value: 'shorts', color: 'green' },
    { displayName: 'Technology', value: 'technology', color: 'cyan' },
    { displayName: 'Podcast', value: 'podcast', color: 'blue' },
    { displayName: 'Action', value: 'action', color: 'purple' },
];