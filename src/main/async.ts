export async function getMenu() {
  const response = fetch('https://sleepy-plateau-22458.herokuapp.com/api/menu');
  const responseData = (await response).json();

  return responseData;
}

getMenu();
