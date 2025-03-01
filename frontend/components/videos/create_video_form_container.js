import { connect } from 'react-redux';
import VideoForm from './video_form';
import { createVideo, deleteVideo, clearErrors } from '../../actions/videos_actions';

const mapSTP = state => {
    let currentUser = state.session.id === null ? null : state.entities.users[state.session.id];
    return ({
        video: { 
            title: '',
            description: '',
            videoURL: null,
            thumbnail: null
        },
        errors: state.errors.videoErrors,
        formType: 'Upload your video',
        currentUser: currentUser,
        buttonType: 'Publish'
    });
};

const mapDTP = dispatch => {
    
    return ({
        action: formData => dispatch(createVideo(formData)),
        deleteVideo: videoId => dispatch(deleteVideo(videoId)),
        clearErrors: () => dispatch(clearErrors())
    })
};

export default connect(mapSTP, mapDTP)(VideoForm);