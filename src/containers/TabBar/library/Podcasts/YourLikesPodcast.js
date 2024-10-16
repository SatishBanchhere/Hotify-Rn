// library import
import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// Local imports
import {yourLikesPodcasts} from '../../../../api/constant';
import {styles} from '../../../../themes';
import ASubHeader from '../../../../components/common/ASubHeader';
import PodcastEpisodeCard from '../../../../components/commonCards/PodcastEpisodeCard';
import {Swap_Green} from '../../../../assets/svgs';
import {moderateScale} from '../../../../common/constants';

const YourLikesPodcast = () => {
  const colors = useSelector(state => state.theme.theme);

  const renderPodcast = ({item, index}) => (
    <PodcastEpisodeCard item={item} index={index} />
  );

  const ListHeaderComponent = () => (
    <ASubHeader
      textType="B20"
      title={strings.sortBy}
      isRightButton={true}
      rightButtonTitle={strings.recentlyAdded}
      rightIcon={<Swap_Green />}
      style={[
        localStyles.subHeaderStyle,
        {
          borderBottomColor: colors.borderColor,
        },
      ]}
    />
  );

  return (
    <FlatList
      data={yourLikesPodcasts}
      renderItem={renderPodcast}
      ListHeaderComponent={ListHeaderComponent}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default YourLikesPodcast;

const localStyles = StyleSheet.create({
  subHeaderStyle: {
    ...styles.pv20,
    borderBottomWidth: moderateScale(1),
    ...styles.mb15,
  },
});
