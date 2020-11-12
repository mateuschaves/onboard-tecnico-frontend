import React from 'react'

import { List } from 'antd'
import { Bounce } from 'react-activity'
import InfiniteScroll from 'react-infinite-scroller'

import ListItem from '../../../components/ListItem'
import { ScrollView, LoadingContainer } from './styles'

export default function MemberList({ members = [], onSelect, handleInfiniteOnLoad, loading, hasMore }) {
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
          dataSource={members}
          renderItem={(member) => (
            <ListItem key={member.id} title={member.name} subtitle={member.email} onPress={() => onSelect(member)} />
          )}
        >
          {loading && hasMore && (
            <LoadingContainer>
              <Bounce color="#fff" />
            </LoadingContainer>
          )}
        </List>
      </InfiniteScroll>
    </ScrollView>
  )
}
