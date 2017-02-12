import React from 'react';

export default (props) => {
  return (
    <div className="comments info">
    	<div>
    		{(props.comment.user.pictures) ? 
    			<a 
    			className="user_url" 
    			href={props.comment.user.link} 
    			target="_blank">
    				<img 
    					src={props.comment.user.pictures.sizes[0].link}
    					alt="user thumbnail"
    				/>
    			</a> : 
    			<a 
    			className="user_url" 
    			href={props.comment.user.link} 
    			target="_blank">
    				<img 
    					className="no-profile-pic"
    					src="http://www.lessuk.org/downloads/Photos/Staff-Photos/No_picture_icon_2.jpg"
    					alt="user thumbnail"
    				/>
    			</a>
    		}
    		<div className="user_info">
    			<div className="user_name">
    				<a 
	    				className="user_url" 
	    				href={props.comment.user.link} 
	    				target="_blank"
	    			>
    					{props.comment.user.name}
    				</a>
    			</div>
    			<div className="upload_date">
    				{props.comment.created_on}
    			</div>
    		</div>
    	</div>
      	<div>{props.comment.text}</div>
    </div>
  );
};