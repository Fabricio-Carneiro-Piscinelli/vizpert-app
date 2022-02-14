// Icons
import Board from '../../Assets/sortBy/board.svg';
import filterAlphabetic from '../../Assets/sortBy/filter_alphabetic.svg';
import filterColors from '../../Assets/sortBy/filter_colors.svg';
import filterSizes from '../../Assets/sortBy/filter_sizes.svg';
import ButtonOrganize from '../../Assets/sortBy/button.svg';

// style
import {
  Content,
  ContentFilterOrganize,
  TitleButtonsFilter,
  ButtonsFilter,
  Divider,
} from './SortByStyle';

// components
import ButtonFilter from './buttonFilter';

function SortBy() {
  return (
    <Content background={Board}>
      <ContentFilterOrganize>
        <TitleButtonsFilter>SORT BY</TitleButtonsFilter>
        <ButtonsFilter>
          <ButtonFilter icon={filterAlphabetic} />
          <ButtonFilter icon={filterColors} />
          <ButtonFilter icon={filterSizes} />
        </ButtonsFilter>
        <Divider />
        <img src={ButtonOrganize} alt="border" />
      </ContentFilterOrganize>
    </Content>
  );
}

export default SortBy;
