export const postData = async (url: string, data: object): Promise<any> => {
    return await fetch(url,
        {
            credentials: 'include',
            mode: 'cors',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(async (res: Response) => {
            if (!res.ok)
                return Promise.reject((await res.json()).message);
        })
}