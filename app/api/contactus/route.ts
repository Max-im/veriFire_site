import axios from 'axios';

export const POST = async (request: Request) => {
    try {
        const { email, message, subject } = await request.json();
        const contactUsId = '2-122250900';
        const HUBSPOT_OWNER_ID = 1759861217;
        const api = axios.create({ baseURL: 'https://api.hubapi.com/crm/v3/objects' });
        api.defaults.headers.common['Authorization'] = `Bearer ${process.env.HUB_SPOT_KEY}`;

        const properties = {
            message: `${subject}:\n\n${message}`,
            customer_id: email,
            hubspot_owner_id: HUBSPOT_OWNER_ID
        };

        const toCreateObject = { associations: [], properties };
        await api.post('/' + contactUsId, toCreateObject);
        return new Response("Success", { status: 200 });
    } catch (error) {
        return new Response("Error", { status: 500 });
    }
} 