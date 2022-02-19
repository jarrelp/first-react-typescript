import http from "../http-common";

export const getAll = <T> (path: string) => {
  return http.get<T[]>(`/${path}`);
};
export const get = <T> (path: string, id: any) => {
  return http.get<T>(`/${path}/${id}`);
};
export const create = <T> (path: string, data: T) => {
  return http.post<T>(`/${path}`, data);
};
export const update = <T> (path: string, id: any, data: T) => {
  return http.put<any>(`/${path}/${id}`, data);
};
export const remove = (path: string, id: any) => {
  return http.delete<any>(`/${path}/${id}`);
};
export const removeAll = (path: string) => {
  return http.delete<any>(`/${path}`);
};
// export function findByName(name: string) {
//   return http.get<Array<T>>(`/charts?name=${name}`);
// };
