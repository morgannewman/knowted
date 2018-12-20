import './JawBone.css';
import React from 'react';
import Topic from './Topic';

import { Droppable, Draggable } from 'react-beautiful-dnd';

import Loading from '../common/Loading';

import { connect } from 'react-redux';

export class JawBone extends React.Component {
	render() {
		if (this.props.loading) return <Loading />;
		const { topics } = this.props;
		return (
			<div className="jaw-bone-container">
				<Droppable droppableId={String(this.props.folderId)} direction="row" isCombineEnabled={false}>
					{provided => (
						<div className="jawbone-folder-items" ref={provided.innerRef} {...provided.droppableProps}>
							{topics.map((topic, index) =>
								topic.parent && topic.parent.id === this.props.folderId ? (
									<Draggable draggableId={String(topic.id)} index={index} key={topic.id}>
										{provided => (
											<div
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
											>
												<Topic title={topic.title} topicId={topic.id} />
											</div>
										)}
									</Draggable>
								) : null
							)}
						</div>
					)}
				</Droppable>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	topics: state.dashboardReducer.topics,
	loading: state.dashboardReducer.loading
});

export default connect(mapStateToProps)(JawBone);
