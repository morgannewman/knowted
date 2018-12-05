import React from 'react';
import { Link } from 'react-router-dom';



export default function RecentResourceItem(props) {
	return (
		<React.Fragment>
			<ul resources={props.resources} className="recent-resources">
				{props.resources.map((item, index) => {
					return (
            <a href={`/${item.resource.id}`} key={index}>
						<li  className="recent-resource-item">
                {item.resource.parent} >
                {item.resource.title}
              <p>Last Opened: {item.resource.last_opened}</p>
						</li>
            </a>
					);
				})}
			</ul>
		</React.Fragment>
	);
}
