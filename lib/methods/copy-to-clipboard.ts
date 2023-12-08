
/**
 * copyToClipboard
 * @param obj object to deep clone
 * @returns {Function}
 */

export function copyToClipboard(
    text: string | number,
){
    const temp = document.createElement('textarea');
    temp.value = String(text);
    document.body.appendChild(temp);
    temp.select();
    if (document.execCommand) {
        document.execCommand('copy');
    }
    temp.style.display = 'none';
    document.body.removeChild(temp);
}
