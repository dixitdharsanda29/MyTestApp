import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import AppContainer from '@components/AppContainer';
import AppHeader from '@components/AppHeader';
import { constantStrings } from '@constants/constantStrings';
import Box from '@components/Box';
import AppText from '@components/AppText';
import AppImage from '@components/AppImage';
import NoDataFound from '@components/NoDataFound';
import Space from '@components/Space';
import { screenPadding, fonts, sizes } from '@constants/theme';
import { styles } from './style';
import { generateDummyData } from '@constants/defaultData';
import VStack from '@components/VStack';
import HStack from '@components/HStack';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useTheme } from '@context/ThemeContext';

const UserCard = React.memo(({ item, colors }) => {
  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <AppImage
        source={{ uri: item?.avatar || '' }}
        style={styles.avatar}
        resizeMode="cover"
      />
      <VStack flex={1} space={0.5}>
        {item?.name && (
          <AppText
            text={item?.name}
            fontSize={sizes.f16}
            fontFamily={fonts.semi_bold}
            color={colors.text}
            numberOfLines={1}
          />
        )}
        {item?.email && (
          <HStack alignItems="center" space={1}>
            <Ionicons
              name="mail-outline"
              size={sizes.f14}
              color={colors.subText}
            />
            <AppText
              text={item?.email}
              fontSize={sizes.f14}
              fontFamily={fonts.regular}
              color={colors.subText}
              numberOfLines={1}
            />
          </HStack>
        )}
        {item?.phone && (
          <HStack alignItems="center" space={1}>
            <Ionicons
              name="call-outline"
              size={sizes.f14}
              color={colors.subText}
            />
            <AppText
              text={item?.phone}
              fontSize={sizes.f14}
              fontFamily={fonts.regular}
              color={colors.subText}
              numberOfLines={1}
            />
          </HStack>
        )}
        {item?.company && (
          <HStack alignItems="center" space={1}>
            <Ionicons
              name="business-outline"
              size={sizes.f14}
              color={colors.primary}
            />
            <AppText
              text={item?.company}
              fontSize={sizes.f14}
              fontFamily={fonts.medium}
              color={colors.primary}
              numberOfLines={1}
            />
          </HStack>
        )}
      </VStack>
    </View>
  );
});

const Listing = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { colors } = useTheme();

  useEffect(() => {
    generateData();
  }, []);

  const generateData = useCallback(() => {
    try {
      setIsLoading(true);
      const mockUsers = generateDummyData();
      if (Array.isArray(mockUsers)) {
        setUsers(mockUsers);
      } else {
        setUsers([]);
      }
    } catch (error) {
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const renderItem = useCallback(
    ({ item }) => {
      return <UserCard item={item} colors={colors} />;
    },
    [colors],
  );

  const keyExtractor = useCallback(item => item?.id?.toString(), []);

  return (
    <AppContainer>
      <AppHeader title={constantStrings.LISTING} />
      <Box flex={1} px={screenPadding}>
        {users?.length > 0 && (
          <FlatList
            data={users}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            windowSize={5}
            removeClippedSubviews={true}
            ListHeaderComponent={<Space value={20} />}
            ItemSeparatorComponent={() => <Space value={10} />}
            ListFooterComponent={<Space value={20} />}
          />
        )}
        {users?.length <= 0 && <NoDataFound loading={isLoading} />}
      </Box>
    </AppContainer>
  );
};

export default Listing;
