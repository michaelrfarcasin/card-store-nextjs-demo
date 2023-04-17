import useSWR from 'swr';

export const apiGet = (url: string) => useSWR(url, fetcher);

const fetcher = (url: string) => fetch(url).then((res) => res.json());