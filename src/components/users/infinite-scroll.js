import PropTypes from 'prop-types'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { UserCard } from './user-card'

const InfiniteScroller = ({ data, fetchNextPage }) => {
	return (
		<InfiniteScroll
			dataLength={data.length}
			endMessage={
				<p style={{ textAlign: 'center' }}>
					<b>Yay! You have seen it all</b>
				</p>
			}
			hasMore={data.length < 1000}
			next={fetchNextPage}
			scrollThreshold={0.98}
		>
			<div className='list-container'>
				{data.map((user, i) => (
					<UserCard key={i} user={user} />
				))}
			</div>
		</InfiniteScroll>
	)
}

InfiniteScroller.propTypes = {
	data: PropTypes.array.isRequired,
	fetchNextPage: PropTypes.func.isRequired,
}

export { InfiniteScroller }
