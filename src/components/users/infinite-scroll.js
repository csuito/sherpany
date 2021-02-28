import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import { Context as UsersContext } from '../../context/users'
import { UserCard } from './user-card'

const InfiniteScroller = ({ data, loading, fetchNextPage }) => {
	const {
		state: { searching },
	} = useContext(UsersContext)

	const infiniteRef = useInfiniteScroll({
		loading,
		hasNextPage: data.length < 1000,
		onLoadMore: fetchNextPage,
	})

	return (
		<div>
			{searching ? (
				<div className='list-container'>
					{data.map((user, i) => (
						<UserCard key={i} user={user} />
					))}
				</div>
			) : (
				<div className='list-container' ref={infiniteRef}>
					{data.map((user, i) => (
						<UserCard key={i} user={user} />
					))}
				</div>
			)}
			{data.length === 1000 && (
				<p>
					<b>End of users catalog.</b>
				</p>
			)}
		</div>
	)
}

InfiniteScroller.propTypes = {
	data: PropTypes.array.isRequired,
	fetchNextPage: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
}

export { InfiniteScroller }
