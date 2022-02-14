import { useState } from 'react';
// style
import { Content, ContentButton } from './ButtonFilterStyle';

// icons
import FilterButton from '../../../Assets/sortBy/filter_button.svg';
import FilterButtonActive from '../../../Assets/sortBy/filter_button_active.svg';

function ButtonFilter(props) {
  const [active, setActive] = useState(false);
  const { icon } = props;

  const onClick = () => {
    setActive(!active);
  };

  return (
    <Content
      active={active}
      background={[FilterButtonActive, FilterButton]}
      onClick={() => onClick()}
    >
      <ContentButton>
        <img src={icon} alt="icon" />
      </ContentButton>
    </Content>
  );
}

export default ButtonFilter;
