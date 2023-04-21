const [fetchedData, setFetchedData] = React.useState(null);

function fetchData() {
    fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => setFetchedData(data));
};


// loads data initially on page load
React.useEffect(() => {
  fetchData()
  }, [])
  

//use this function to tie to an "onChange" or "onClick" event when submitting the values.
function filterData(inputValue) {
  if(inputValue === "") return;

  
  const filteredData = fetchedData.filter((value) => {
  return value.SEARCH_INDEX_VALUE_HERE >= inputValue
  }
  
  return filteredData;
}