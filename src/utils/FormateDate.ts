

export const formateDate = (data: string) => {

return new Date(data).toLocaleString('pt-Br',{
  month:'2-digit',
  day:'2-digit',
  hour:'2-digit',
  minute:'2-digit'
})

};
