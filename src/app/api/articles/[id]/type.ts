/**
 * 文章参数接口
 * @interface Params
 * @property {string} id - 文章ID
 */
export type Params = Promise<{
    id: string;
}>