import {
    Card,
    CardActions,
    CardContent,
    Typography,
    Button,
} from '@mui/material';
import IconButton from '@mui/material/Button';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => {
    return (
        <Card>
            <CardContent>
                <Typography id="text">
                    {selectedQuote.quote} -{' '}
                    <span id="author">{selectedQuote.author}</span>
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    id="new-quote"
                    color="inherit"
                    variant="contained"
                    size="small"
                    onClick={assignNewQuoteIndex}
                >
                    Next Quote
                </Button>
                <IconButton
                    id="tweet-quote"
                    href={encodeURI(
                        `https://twitter.com/intent/tweet?text=${selectedQuote.quote} ${selectedQuote.author}&hashtags=WowamLifeFreedom`
                    )}
                    target="_blank"
                >
                    <FontAwesomeIcon
                        icon={faTwitter}
                        size="md"
                    ></FontAwesomeIcon>
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default QuoteMachine;
