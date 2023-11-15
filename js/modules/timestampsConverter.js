export function formatTimestampToDateString(timestamp) {
    const options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };
    const formattedDate = new Date(timestamp).toLocaleDateString('en-US', options);
    return formattedDate;
}