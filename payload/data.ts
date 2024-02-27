
export const getItemsPayload = async () => {
    const items = await import('./items-payload.json');
    return items;
}