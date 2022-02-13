// style
import { Content, ContentButton } from './ButtonFilterStyle';

// icons
import FilterButton from '../../../Assets/sortBy/filter_button.svg';

function ButtonFilter(props) {
  const { icon } = props;
  return (
    <Content background={FilterButton}>
      <ContentButton>
        <img src={icon} alt="icon" />
      </ContentButton>
    </Content>
  );
}

export default ButtonFilter;
