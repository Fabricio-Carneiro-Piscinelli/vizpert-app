// components
import SortBy from '../../components/sortby';

// icons
import SVGPeople from '../../Assets/people/lady.svg';

// style
import { Content, ImagePeopleConteiner } from './peopleStyle';

function People() {
  return (
    <Content>
      <SortBy />
      <ImagePeopleConteiner>
        <img src={SVGPeople} alt="lady people" />
      </ImagePeopleConteiner>
    </Content>
  );
}

export default People;
