import React from 'react'

import { List } from 'antd'
import { Bounce } from 'react-activity'
import InfiniteScroll from 'react-infinite-scroller'

import ListItem from '../../../components/ListItem'
import { ScrollView, Loading } from './styles'

export default function MemberList({ memberTypes = [], onSelect, handleInfiniteOnLoad, loading, hasMore }) {
  return (
    <ScrollView>
      <InfiniteScroll
        initialLoad={true}
        pageStart={0}
        loadMore={handleInfiniteOnLoad}
        hasMore={!loading && hasMore}
        useWindow={false}
      >
        <List
          dataSource={memberTypes}
          renderItem={(memberType) => (
            <ListItem key={memberType.id} title={memberType.description} onPress={() => onSelect(memberType)} />
          )}
        />

        {loading && hasMore && (
          <Loading>
            <Bounce color="#fff" />
          </Loading>
        )}
      </InfiniteScroll>
    </ScrollView>
  )
}
