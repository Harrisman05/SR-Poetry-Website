import {useLocation} from 'react-router-dom';

const PoemSelected = () => {

  const location = useLocation();

  const selectedPoem = location.state.replaceAll('\\n', '\n');

  console.log(location);

  return (
    <div className='font-baskerville whitespace-pre-wrap'>{selectedPoem}</div>
  )
}

export default PoemSelected