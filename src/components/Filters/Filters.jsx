import React, { useContext, useEffect } from "react";
import { Select , Slider} from "antd";
import { brandsContext } from "../../contexts/brandsContext";

const Filters = ({ brand, setBrand  , price , setPrice}) => {
  const { getBrands, brands } = useContext(brandsContext);
  useEffect(() => {
    getBrands();
  }, []);
  return (
    <div style={{marginTop:"20px"}}>
      <Select 
      allowClear
      style={{width:'100%'}}
        value={brand}
        onChange={(e) => setBrand(e)}
        mode="multiple"
        placeholder="Filter by brand"
      >
        {brands.map((item) => (
          <Select.Option value={item.brand} key={item.id}>
            {item.brand}
          </Select.Option>
        ))}
      </Select>

      <Slider
      style={{width:"1000px"}}
      value={price}
      onChange={(e) => setPrice(e)}
      range defaultValue={[1, 1000]}
      min={0}
      max={1000}
      step={100}
      />
    </div>
  );
};

export default Filters;