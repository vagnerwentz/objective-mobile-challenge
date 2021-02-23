import React from 'react';
import { View } from 'react-native';

import {
  PaginationContainer,
  PagesContainer,
  PageSelection,
  ArrowButton,
  PageNumber,
} from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

interface PaginationProps {
  pages: number;
  selectedPage?: number;
  onPress: (page: number) => void;
}

const PAGE_VISIBLES = 3;
const HALF_ITEMS_VISIBLE = Math.floor(PAGE_VISIBLES / 2);

const Pagination = ({
  pages,
  selectedPage = 0,
  onPress = () => {}
}: PaginationProps) => {

  const visiblePages = (array: any[]) => {
    if (selectedPage < HALF_ITEMS_VISIBLE) {
      return array.slice(0, PAGE_VISIBLES)
    }

    if (selectedPage >= pages - 1) {
      return array.slice(pages - PAGE_VISIBLES + 1, pages + 1)
    }

    const previousItemsVisible = selectedPage - HALF_ITEMS_VISIBLE
    const nextItemsVisible = selectedPage + HALF_ITEMS_VISIBLE + 1
    return array.slice(previousItemsVisible, nextItemsVisible)
  }

  return (
    <PaginationContainer>
      <View>
        {selectedPage > 0 && (
          <ArrowButton onPress={() => onPress(selectedPage - 1)}>
            <Icon size={40} name='caret-back-outline' color='#D20A0A' />
          </ArrowButton>
        )}
      </View>
      <PagesContainer>
        {visiblePages(
          Array(pages + 1)
            .fill('')
            .map((_, i) => (
              <PageSelection
                key={Math.random()}
                selected={i === selectedPage}
              >
                <PageNumber selected={i === selectedPage}>{i + 1}</PageNumber>
              </PageSelection>
            ))
        )}
      </PagesContainer>
      <View>
        {selectedPage < pages && (
          <ArrowButton onPress={() => onPress(selectedPage + 1)}>
            <Icon size={40} name='caret-forward-outline' color='#D20A0A'/>
          </ArrowButton>
        )}
      </View>
    </PaginationContainer>
  );
}

export { Pagination };
