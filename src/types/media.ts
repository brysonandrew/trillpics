export type TEntryResolver<R = unknown> = () => Promise<R>
export type TEntryRecord =  Record<string, TEntryResolver>

