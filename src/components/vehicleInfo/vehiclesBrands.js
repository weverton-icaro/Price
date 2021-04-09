import React, {useState, useEffect} from 'react';
import Select from 'react-select'
import Api from '../../services/Api';

function GetDataFipe({fetchUrl}){
  const [brand, setBrand] = useState([]);
  const [selected , setSelected] = useState(null)


  useEffect(() => {
    async function fetchData(){
      const request = await Api.get(fetchUrl)
      console.log(request.data);
      setBrand(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl])

  function handleSelectOptions(selectOption){
    setSelected(selectOption)
    console.log(selectOption.id)
  }

  return(
    <div>
      <Select 
        key={JSON.stringify(brand)}
        options={brand}
        value={selected}
        onChange={handleSelectOptions}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id}
        placeholder="Selecione a marca..."
      />

    </div>
  )
}

export default GetDataFipe;