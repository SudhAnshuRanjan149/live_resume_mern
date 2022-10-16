export default function copyToClicpBoard(e) {
  // Get the text field
  let copyText = e.target.innerHTML;

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);

  // Alert the copied text
  alert("Copied the text: " + copyText);
}
