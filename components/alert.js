import Container from './container';
import cn from 'classnames';
import {EXAMPLE_PATH} from '../lib/constants';

export default function Alert({preview}) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{' '}
              <a
                href={process.env.GITHUB_REPO_PATH}
                className="underline hover:text-success duration-200 transition-colors"
              >
                available on GitHub
              </a><br />
              To access the graphiql tool click {' '}
              <a
                href={`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/explore?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`}
                className="underline hover:text-success duration-200 transition-colors"
                target='_blank'
              >
                here
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
