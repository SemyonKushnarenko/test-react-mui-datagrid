export const FilmsEndpoints = {
    getAll: (params?: string) => `/${params ? `?${params}` : '?s=aap'}`,
}