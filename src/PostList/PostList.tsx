import React from 'react';
import styled from 'styled-components';
import PostListItem from './PostListItem';
import { useSpring, animated, useTransition } from 'react-spring';

const StyledPageListContainer = styled.div`
    background-color: #282c34;
`;

const test = [
    {
        "domain": "i.imgur.com",
        "banned_by": null,
        "media_embed": {},
        "subreddit": "funny",
        "selftext_html": null,
        "selftext": "",
        "likes": null,
        "user_reports": [],
        "secure_media": null,
        "link_flair_text": null,
        "id": "2hqlxpaaxqa",
        "gilded": 0,
        "secure_media_embed": {},
        "clicked": false,
        "report_reasons": null,
        "author": "washedupwornout",
        "media": null,
        "score": 4841,
        "approved_by": null,
        "over_18": false,
        "hidden": false,
        "thumbnail": "http://b.thumbs.redditmedia.com/9N1f7UGKM5fPZydrsgbb4_SUyyLW7A27um1VOygY3LM.jpg",
        "subreddit_id": "t5_2qh33",
        "edited": false,
        "link_flair_css_class": null,
        "author_flair_css_class": null,
        "downs": 0,
        "mod_reports": [],
        "saved": false,
        "is_self": false,
        "name": "t3_2hqlxp",
        "permalink": "/r/funny/comments/2hqlxp/man_trying_to_return_a_dogs_toy_gets_tricked_into/",
        "stickied": false,
        "created": 1411975314,
        "url": "http://i.imgur.com/4CHXnj2.gif",
        "author_flair_text": null,
        "title": "Man trying to return a dog's toy gets tricked into playing fetch",
        "created_utc": 1411946514,
        "ups": 4841,
        "num_comments": 958,
        "visited": false,
        "num_reports": null,
        "distinguished": null
    },
    {
        "domain": "i.imgur.com",
        "banned_by": null,
        "media_embed": {},
        "subreddit": "funny",
        "selftext_html": null,
        "selftext": "",
        "likes": null,
        "user_reports": [],
        "secure_media": null,
        "link_flair_text": null,
        "id": "2hqlxpaaaax",
        "gilded": 0,
        "secure_media_embed": {},
        "clicked": false,
        "report_reasons": null,
        "author": "washedupwornout",
        "media": null,
        "score": 4841,
        "approved_by": null,
        "over_18": false,
        "hidden": false,
        "thumbnail": "http://b.thumbs.redditmedia.com/9N1f7UGKM5fPZydrsgbb4_SUyyLW7A27um1VOygY3LM.jpg",
        "subreddit_id": "t5_2qh33",
        "edited": false,
        "link_flair_css_class": null,
        "author_flair_css_class": null,
        "downs": 0,
        "mod_reports": [],
        "saved": false,
        "is_self": false,
        "name": "t3_2hqlxp",
        "permalink": "/r/funny/comments/2hqlxp/man_trying_to_return_a_dogs_toy_gets_tricked_into/",
        "stickied": false,
        "created": 1411975314,
        "url": "http://i.imgur.com/4CHXnj2.gif",
        "author_flair_text": null,
        "title": "Man trying to return a dog's toy gets tricked into playing fetch",
        "created_utc": 1411946514,
        "ups": 4841,
        "num_comments": 958,
        "visited": false,
        "num_reports": null,
        "distinguished": null
    },
    {
        "domain": "i.imgur.com",
        "banned_by": null,
        "media_embed": {},
        "subreddit": "funny",
        "selftext_html": null,
        "selftext": "",
        "likes": null,
        "user_reports": [],
        "secure_media": null,
        "link_flair_text": null,
        "id": "2hqlxpaaa",
        "gilded": 0,
        "secure_media_embed": {},
        "clicked": false,
        "report_reasons": null,
        "author": "washedupwornout",
        "media": null,
        "score": 4841,
        "approved_by": null,
        "over_18": false,
        "hidden": false,
        "thumbnail": "http://b.thumbs.redditmedia.com/9N1f7UGKM5fPZydrsgbb4_SUyyLW7A27um1VOygY3LM.jpg",
        "subreddit_id": "t5_2qh33",
        "edited": false,
        "link_flair_css_class": null,
        "author_flair_css_class": null,
        "downs": 0,
        "mod_reports": [],
        "saved": false,
        "is_self": false,
        "name": "t3_2hqlxp",
        "permalink": "/r/funny/comments/2hqlxp/man_trying_to_return_a_dogs_toy_gets_tricked_into/",
        "stickied": false,
        "created": 1411975314,
        "url": "http://i.imgur.com/4CHXnj2.gif",
        "author_flair_text": null,
        "title": "Man trying to return a dog's toy gets tricked into playing fetch",
        "created_utc": 1411946514,
        "ups": 4841,
        "num_comments": 958,
        "visited": false,
        "num_reports": null,
        "distinguished": null
    }
];

const PostList = () => {

    const [postLists, setPostLists] = React.useState(test);

    const listTransitions = useTransition(postLists, item => item.id, {
        from: { opacity: 0, transform: "translate3d(-25%, 0px, 0px)" },
        enter: { opacity: 1, transform: "translate3d(0%, 0px, 0px)" },
        leave: { opacity: 0, height: 'auto', transform: "translate3d(-25%, 0px, 0px)" }
    });

    const removePost = (id: string) => {
        const newPostList = postLists.filter((item) => item.id !== id);
        setPostLists(newPostList);
    }

    return (
        <StyledPageListContainer>
            {listTransitions.map(({ item, props, key }) => {
                return (
                    item && <animated.div key={key} style={props}>
                        <PostListItem
                            key={key}
                            author={item.author}
                            created_utc={item.created_utc}
                            num_comments={item.num_comments}
                            id={item.id}
                            title={item.title}
                            thumbnail={item.thumbnail}
                            url={item.url}
                            onRemove={removePost}
                        />
                    </animated.div>
                )
            })}
        </StyledPageListContainer>
    );

}

export default PostList;