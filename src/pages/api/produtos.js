import { apiBase } from '../../../lib/tmdb';

export default async(req, res) => {
    const result = await fetch(`${apiBase}`);
    const json = await result.json();

    res.status(200).json({
        lista: json
    })
}