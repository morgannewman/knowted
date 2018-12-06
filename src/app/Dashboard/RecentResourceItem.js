import React from 'react';
// import { Link } from 'react-router-dom';


export default function RecentResourceItem(props) {
	let TopicItem;

	/**
	 * This function passes in a topics array and item object from a higher level component
	 * a forEach loop is called on the topics array to find the name of a resources parent topic
	 * Once found it is assinged to the TopicItem variable
	 * @param {{topics:array}} topics 
	 * @param {{item:object}} item 
	 */

	const getTopicTitle = (topics, item) => {
		topics.forEach((topic) => {
			return topic.id === item.resource.parent ? TopicItem = topic.title : null;
		
		});
	};

	return (
		<React.Fragment>
			<ul topics={props.topics} resources={props.resources} className="recent-resources">
				{props.resources.map((item, index) => {
					return (
						<li key={index} className="recent-resource-item">
							<a href={`/${item.resource.id}`}>
								{getTopicTitle(props.topics, item)}
								{TopicItem? TopicItem :''}
								>>
								{item.resource.title}
								<p>Last Opened: {item.resource.last_opened}</p>
							</a>
						</li>
					);
				})}
			</ul>
		</React.Fragment>
	);
}
