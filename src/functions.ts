export function dtEdit(daytime: string) {
  const dateTime = daytime.split(" ");
 //const time = dateTime[1].slice(0,5);
  const newDate = dateTime[0].split("-");
  const month = newDate[1];
  const day = newDate[2];
  return `${day} / ${month}`;
}

export function dtEdit_t(daytime: string) {
  const dateTime = daytime.split(" ");
 const time = dateTime[1].slice(0,5);
  return time;
}

export function tempEdit(temp:number) {
  return Math.round(temp);

}

export function timeEdit(utctime: number) {
  const dateTime = new Date(utctime * 1000);
  const month = dateTime.getMonth() + 1;
  const date = dateTime.getDate();
  //const hours = dateTime.getHours();
  //const min = String(dateTime.getMinutes()).padStart(2, "0");
  return `${date} / ${month} `;
}

