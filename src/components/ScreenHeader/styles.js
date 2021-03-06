import { StyleSheet } from 'react-native';

import { SECONDARY_ASSET_PADDING } from '../../styles/paddings';
import { HEADER_FONT_SIZE } from '../../styles/fontSizes';
import { MAIN_THEME } from '../../styles/colors';

const styles = StyleSheet.create({
  text: {
    color: MAIN_THEME.PRIMARY_COLOR,
    fontSize: HEADER_FONT_SIZE,
    fontWeight: 'bold',
    paddingRight: SECONDARY_ASSET_PADDING,
    paddingBottom: (SECONDARY_ASSET_PADDING / 2) * 3,
  },
});

export default styles;
