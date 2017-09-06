const parameterList = [
  { name: 'mwUrl', description: 'Mediawiki base URL.', required: true },
  {
    name: 'adminEmail',
    description: 'Email of the mwoffliner user which will be put in the HTTP user-agent string',
    required: true
  },
  { name: 'articleList', description: 'File with one title (in UTF8) per line', required: false },
  { name: 'cacheDirectory', description: 'Directory where files are permanently cached', required: false },
  {
    name: 'customZimFavicon',
    description: 'Use this option to give a path to a PNG favicon, it will be used in place of the Mediawiki logo.',
    required: false
  },
  { name: 'customZimTitle', description: 'Allow to configure a custom ZIM file title.', required: false },
  { name: 'customZimDescription', description: 'Allow to configure a custom ZIM file description.', required: false },
  { name: 'customMainPage', description: 'Allow to configure a custom page as welcome page.', required: false },
  {
    name: 'deflateTmpHtml',
    description: 'To reduce I/O, HTML pages might be deflated in tmpDirectory.',
    required: false
  },
  {
    name: 'filenamePrefix',
    description: 'For the part of the ZIM filename which is before the date part.',
    required: false
  },
  {
    name: 'format',
    description: 'To custom the output with comma separated values : "nopic,novid,nozim,nodet"',
    required: false
  },
  { name: 'keepEmptyParagraphs', description: 'Keep all paragraphs, even empty ones.', required: false },
  { name: 'keepHtml', description: 'If ZIM built, keep the temporary HTML directory', required: false },
  { name: 'mwWikiPath', description: 'Mediawiki wiki base path (per default "/wiki/"', required: false },
  { name: 'mwApiPath', description: 'Mediawiki API path (per default "/w/api.php"', required: false },
  { name: 'mwDomain', description: 'Mediawiki user domain (thought for private wikis)', required: false },
  { name: 'mwUsername', description: 'Mediawiki username (thought for private wikis)', required: false },
  { name: 'mwPassword', description: 'Mediawiki user password (thought for private wikis)', required: false },
  { name: 'minifyHtml', description: 'Try to reduce the size of the HTML', required: false },
  { name: 'outputDirectory', description: 'Directory to write the downloaded content', required: false },
  { name: 'parsoidUrl', description: 'Mediawiki Parsoid URL', required: false },
  { name: 'publisher', description: "ZIM publisher meta data, per default 'Kiwix'", required: false },
  {
    name: 'redis',
    description: 'Redis configuration (https://github.com/NodeRedis/node_redis#rediscreateclient)',
    required: false
  },
  { name: 'requestTimeout', description: 'Request timeout (in seconds)', required: false },
  { name: 'resume', description: 'Do not overwrite if ZIM file already created', required: false },
  {
    name: 'skipHtmlCache',
    description: 'Do not cache Parsoid HTML output (and do not use any cached HTML content)',
    required: false
  },
  { name: 'skipCacheCleaning', description: 'Do not search for old/outdated files in the cache', required: false },
  {
    name: 'speed',
    description: 'Multiplicator for the number of parallel HTTP requests on Parsoid backend (per default the number of CPU cores). The default value is 1.',
    required: false
  },
  { name: 'tmpDirectory', description: 'Directory where files are temporary stored', required: false },
  { name: 'verbose', description: 'Print debug information to the stdout', required: false },
  { name: 'withZimFullTextIndex', description: 'Include a fulltext search index to the ZIM', required: false },
  { name: 'writeHtmlRedirects', description: 'Write redirect as HTML files', required: false },
  {
    name: 'spaceDelimiter',
    decription: 'Character to use in place of space in titles (Default is "_")',
    required: false
  },
  { name: 'localParsoid', description: 'Create a local parsoid instance default value is false', required: false },
  { name: 'mobileLayout', description: 'HTML optimised for mobile use', required: false },
  { name: 'addNamespaces', description: 'Force addional namespace (comma separated numbers)', required: false }
];

module.exports = {
  parameterList: parameterList
};
