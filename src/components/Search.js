import { Divider, Input } from 'antd';

function Search(props) {

    const {keyword, onChange} = props
  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input value={keyword} type="text" placeholder="Search..." onChange={onChange} />
    </>
  );
}

export default Search;
