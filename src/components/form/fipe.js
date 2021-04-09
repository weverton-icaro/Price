import React, {useState} from 'react';
import Select from 'react-select'


function GetDataFipe({key, options, value, onChange}){
  // const [brand, setBrand] = useState([]);
  const [selected , setSelected] = useState(null)


  // useEffect(() => {
  //   async function fetchData(){
  //     const request = await axios.get(fetchUrl)
  //     console.log(request.data);
  //     setBrand(request.data);
  //     return request;
  //   }
  //   fetchData();
  // }, [fetchUrl])

  // function handleSelectOptions(selectOption){
  //   setSelected(selectOption)
  //   console.log(selectOption.id)
  // }

  return(
    <div>
      <Select 
        key={key}
        options={options}
        value={value}
        onChange={onChange}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id}
        placeholder="Selecione a marca..."
      />

    </div>
  )
}

export default GetDataFipe;