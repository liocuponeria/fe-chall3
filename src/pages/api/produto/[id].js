import { apiBase } from '../../../../lib/tmdb';

export default async(req, res) => {

    const result = await fetch(`${apiBase}/produto/${req.query.id}`);

    const json = await result.json();

    res.status(200).json({
        info: json
    })
}