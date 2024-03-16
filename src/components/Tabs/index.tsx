import {
  Tabs as ChakraTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  createMultiStyleConfigHelpers,
} from "@chakra-ui/react";
import { tabsAnatomy } from "@chakra-ui/anatomy";

import {
  TabsAlign,
  TabsProps,
  TabsSize,
  TabsVariant,
} from "@/components/Tabs/Tabs.d";
import { COLOR_PRIMARY_500 } from "@/constants/color";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseStyle = definePartsStyle({
  root: {
    width: "100%",
  },
  tab: {
    padding: "0 2rem",
    fontWeight: 600,
    paddingInlineStart: "3rem",
    paddingInlineEnd: "3rem",
    WebkitPaddingStart: "3rem",
    WebkitPaddingEnd: "3rem",
  },
  tabpanel: {
    paddingTop: "3rem",
  },
});
const sizes = {
  [TabsSize.Medium]: definePartsStyle({
    tab: {
      fontSize: "1.6rem",
    },
    tabpanel: {
      fontSize: "1.6rem",
      textAlign: "left",
    },
  }),
};
export const tabsTheme = defineMultiStyleConfig({ sizes, baseStyle });

const Tabs = ({
  items,
  align = TabsAlign.Center,
  size = TabsSize.Medium,
  variant = TabsVariant.Line,
  fitted = false,
}: TabsProps) => {
  return (
    <ChakraTabs
      colorScheme="brand"
      align={align}
      size={size}
      variant={variant}
      isFitted={fitted}
      isLazy
    >
      <TabList>
        {items.map((tab, index) => (
          <Tab key={index}>{tab.label}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {items.map((tab, index) => (
          <TabPanel key={index}>{tab.content}</TabPanel>
        ))}
      </TabPanels>
    </ChakraTabs>
  );
};

export default Tabs;
