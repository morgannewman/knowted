import React from 'react';
import { Link } from 'react-router-dom';

export default function RecentResourceItem(props) {
	return (
		<React.Fragment>
			<ul resources={props.resources} className="recent-resources">
				{props.resources.map((item, index) => {
					return (
						<li key={index} className="recent-resource-item">
							<Link to={`/${item.resource.id}`}>
                {item.resource.topic} >
								{item.resource.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</React.Fragment>
	);
}
