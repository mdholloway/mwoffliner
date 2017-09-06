"use strict";

var config = {
    userAgent: 'MWOffliner/HEAD',

    defaults: {
        publisher: 'Kiwix',
        redisConfig: '/dev/shm/redis.sock',
        requestTimeout: 60,
    },

    filters: {
        /* All DOM nodes with on of these styles will be removed */
        /* On Wikivoyage 'noprint' remove also top banners like on 'South America'. */
        cssClassBlackList: [
            'noprint', 'metadata', 'ambox', 'stub',
            'topicon', 'magnify', 'navbar',
            'mwe-math-mathml-inline', 'mw-kartographer-container'
        ],

        /* Additional black list if only intro is dumped */
        nodetCssClassBlackList: [ 'mw-ref' ],

        /* All DOM node with these styles will be deleted
         * if no <a> tag is included in the sub-tree */
        cssClassBlackListIfNoLink: [
            'mainarticle', 'seealso', 'dablink', 'rellink', 'hatnote'
        ],

        /* All DOM nodes which we should for to display */
        cssClassDisplayList: ['thumb'],

        /* List of style to be removed */
        cssClassCallsBlackList: ['plainlinks'],

        /* All nodes with one of these ids will be removed */
        idBlackList: ['purgelink'],

        /* This module has no CSS, blacklisting it avoids creating
         * an empty file that generate an error in firefox
         * error is "style sheet could not be loaded"
         */
        blackListCssModules: ['mediawiki.page.gallery'],
    },

    output: {
        // CSS resources added by Kiwix
        cssResources: [ 'mobile.css', 'content.parsoid.css', 'inserted_style_mobile.css' ],

        // JS/CSS resources to be imported from MediaWiki
        mw: {
            css: {
                desktop: [],
                mobile: [
                    ['skins.minerva.base.reset', 'skins.minerva.content.styles',
                    'ext.cite.style', 'mobile.app.pagestyles.android',
                    'mediawiki.page.gallery.styles',
                    'mediawiki.skinning.content.parsoid'].join('|')
                ]
            },
            js: ['startup', 'jquery', 'mediawiki', 'site'],
        },

        // Output directories for storing js and css resources
        dirs : {
            style: 's',
            media: 'm',
            javascript: 'j',
            styleModules: 'css_modules',
            jsModules: 'js_modules',
        },

        // Output templates (TODO: Needs more docs)
        templates: {
            /* Template code for any redirect to be written on the FS */
            redirects : './templates/redirects.html',

            /* In these files, the following replacements will occur:
             * __ARTICLE_JS_LIST__  ==> list of script tags linking to all the js modules dependencies
             * __ARTICLE_CSS_LIST__ ==> list of link tags linking to all the css modules dependencies
             * __CSS_LINKS__        ==> list of link tags for config.output.cssResources
             */
            mobile: './templates/mobile.html',
            desktop: './templates/desktop.html',

            /* License footer template code */
            footer : './templates/footer.html',
        },
    },
};

module.exports = {
    config: config
};
