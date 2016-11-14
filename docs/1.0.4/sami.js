
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Crontab" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Crontab.html">Crontab</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Crontab_BaseJob" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Crontab/BaseJob.html">BaseJob</a>                    </div>                </li>                            <li data-name="class:Crontab_Crontab" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Crontab/Crontab.html">Crontab</a>                    </div>                </li>                            <li data-name="class:Crontab_CrontabFileHandler" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Crontab/CrontabFileHandler.html">CrontabFileHandler</a>                    </div>                </li>                            <li data-name="class:Crontab_Job" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Crontab/Job.html">Job</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Crontab.html", "name": "Crontab", "doc": "Namespace Crontab"},
            
            {"type": "Class", "fromName": "Crontab", "fromLink": "Crontab.html", "link": "Crontab/BaseJob.html", "name": "Crontab\\BaseJob", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Crontab\\BaseJob", "fromLink": "Crontab/BaseJob.html", "link": "Crontab/BaseJob.html#method_getMinute", "name": "Crontab\\BaseJob::getMinute", "doc": "&quot;Return the minute&quot;"},
                    {"type": "Method", "fromName": "Crontab\\BaseJob", "fromLink": "Crontab/BaseJob.html", "link": "Crontab/BaseJob.html#method_getHour", "name": "Crontab\\BaseJob::getHour", "doc": "&quot;Return the hour&quot;"},
                    {"type": "Method", "fromName": "Crontab\\BaseJob", "fromLink": "Crontab/BaseJob.html", "link": "Crontab/BaseJob.html#method_getDayOfMonth", "name": "Crontab\\BaseJob::getDayOfMonth", "doc": "&quot;Return the day of month&quot;"},
                    {"type": "Method", "fromName": "Crontab\\BaseJob", "fromLink": "Crontab/BaseJob.html", "link": "Crontab/BaseJob.html#method_getMonth", "name": "Crontab\\BaseJob::getMonth", "doc": "&quot;Return the month&quot;"},
                    {"type": "Method", "fromName": "Crontab\\BaseJob", "fromLink": "Crontab/BaseJob.html", "link": "Crontab/BaseJob.html#method_getDayOfWeek", "name": "Crontab\\BaseJob::getDayOfWeek", "doc": "&quot;Return the day of week&quot;"},
                    {"type": "Method", "fromName": "Crontab\\BaseJob", "fromLink": "Crontab/BaseJob.html", "link": "Crontab/BaseJob.html#method_getCommand", "name": "Crontab\\BaseJob::getCommand", "doc": "&quot;Return the command&quot;"},
                    {"type": "Method", "fromName": "Crontab\\BaseJob", "fromLink": "Crontab/BaseJob.html", "link": "Crontab/BaseJob.html#method_getStatus", "name": "Crontab\\BaseJob::getStatus", "doc": "&quot;Return the status&quot;"},
                    {"type": "Method", "fromName": "Crontab\\BaseJob", "fromLink": "Crontab/BaseJob.html", "link": "Crontab/BaseJob.html#method_getComments", "name": "Crontab\\BaseJob::getComments", "doc": "&quot;Return the comments&quot;"},
                    {"type": "Method", "fromName": "Crontab\\BaseJob", "fromLink": "Crontab/BaseJob.html", "link": "Crontab/BaseJob.html#method_getErrorFile", "name": "Crontab\\BaseJob::getErrorFile", "doc": "&quot;Return error file&quot;"},
                    {"type": "Method", "fromName": "Crontab\\BaseJob", "fromLink": "Crontab/BaseJob.html", "link": "Crontab/BaseJob.html#method_getErrorSize", "name": "Crontab\\BaseJob::getErrorSize", "doc": "&quot;Return the error file size&quot;"},
                    {"type": "Method", "fromName": "Crontab\\BaseJob", "fromLink": "Crontab/BaseJob.html", "link": "Crontab/BaseJob.html#method_getLogFile", "name": "Crontab\\BaseJob::getLogFile", "doc": "&quot;Return log file&quot;"},
                    {"type": "Method", "fromName": "Crontab\\BaseJob", "fromLink": "Crontab/BaseJob.html", "link": "Crontab/BaseJob.html#method_getLogSize", "name": "Crontab\\BaseJob::getLogSize", "doc": "&quot;Return the log file size&quot;"},
                    {"type": "Method", "fromName": "Crontab\\BaseJob", "fromLink": "Crontab/BaseJob.html", "link": "Crontab/BaseJob.html#method_setStatus", "name": "Crontab\\BaseJob::setStatus", "doc": "&quot;Set the status&quot;"},
                    {"type": "Method", "fromName": "Crontab\\BaseJob", "fromLink": "Crontab/BaseJob.html", "link": "Crontab/BaseJob.html#method_setLogSize", "name": "Crontab\\BaseJob::setLogSize", "doc": "&quot;Set the log file size&quot;"},
                    {"type": "Method", "fromName": "Crontab\\BaseJob", "fromLink": "Crontab/BaseJob.html", "link": "Crontab/BaseJob.html#method_setErrorSize", "name": "Crontab\\BaseJob::setErrorSize", "doc": "&quot;Set the error file size&quot;"},
            
            {"type": "Class", "fromName": "Crontab", "fromLink": "Crontab.html", "link": "Crontab/Crontab.html", "name": "Crontab\\Crontab", "doc": "&quot;Represent a crontab&quot;"},
                                                        {"type": "Method", "fromName": "Crontab\\Crontab", "fromLink": "Crontab/Crontab.html", "link": "Crontab/Crontab.html#method___construct", "name": "Crontab\\Crontab::__construct", "doc": "&quot;Constructor&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Crontab", "fromLink": "Crontab/Crontab.html", "link": "Crontab/Crontab.html#method_parseExistingCrontab", "name": "Crontab\\Crontab::parseExistingCrontab", "doc": "&quot;Parse an existing crontab&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Crontab", "fromLink": "Crontab/Crontab.html", "link": "Crontab/Crontab.html#method_render", "name": "Crontab\\Crontab::render", "doc": "&quot;Render the crontab and associated jobs&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Crontab", "fromLink": "Crontab/Crontab.html", "link": "Crontab/Crontab.html#method_write", "name": "Crontab\\Crontab::write", "doc": "&quot;Write the current crons in the cron table&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Crontab", "fromLink": "Crontab/Crontab.html", "link": "Crontab/Crontab.html#method_flush", "name": "Crontab\\Crontab::flush", "doc": "&quot;Remove all crontab content&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Crontab", "fromLink": "Crontab/Crontab.html", "link": "Crontab/Crontab.html#method_getUser", "name": "Crontab\\Crontab::getUser", "doc": "&quot;Get unix user to add crontab&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Crontab", "fromLink": "Crontab/Crontab.html", "link": "Crontab/Crontab.html#method_setUser", "name": "Crontab\\Crontab::setUser", "doc": "&quot;Set unix user to add crontab&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Crontab", "fromLink": "Crontab/Crontab.html", "link": "Crontab/Crontab.html#method_getCrontabExecutable", "name": "Crontab\\Crontab::getCrontabExecutable", "doc": "&quot;Get crontab executable location&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Crontab", "fromLink": "Crontab/Crontab.html", "link": "Crontab/Crontab.html#method_setCrontabExecutable", "name": "Crontab\\Crontab::setCrontabExecutable", "doc": "&quot;Set unix user to add crontab&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Crontab", "fromLink": "Crontab/Crontab.html", "link": "Crontab/Crontab.html#method_getJobs", "name": "Crontab\\Crontab::getJobs", "doc": "&quot;Get all crontab jobs&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Crontab", "fromLink": "Crontab/Crontab.html", "link": "Crontab/Crontab.html#method_getError", "name": "Crontab\\Crontab::getError", "doc": "&quot;Get crontab error&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Crontab", "fromLink": "Crontab/Crontab.html", "link": "Crontab/Crontab.html#method_getOutput", "name": "Crontab\\Crontab::getOutput", "doc": "&quot;Get crontab output&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Crontab", "fromLink": "Crontab/Crontab.html", "link": "Crontab/Crontab.html#method_addJob", "name": "Crontab\\Crontab::addJob", "doc": "&quot;Add a new job to the crontab&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Crontab", "fromLink": "Crontab/Crontab.html", "link": "Crontab/Crontab.html#method_setJobs", "name": "Crontab\\Crontab::setJobs", "doc": "&quot;Adda new job to the crontab&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Crontab", "fromLink": "Crontab/Crontab.html", "link": "Crontab/Crontab.html#method_removeAllJobs", "name": "Crontab\\Crontab::removeAllJobs", "doc": "&quot;Remove all job in the current crontab&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Crontab", "fromLink": "Crontab/Crontab.html", "link": "Crontab/Crontab.html#method_removeJob", "name": "Crontab\\Crontab::removeJob", "doc": "&quot;Remove a specified job in the current crontab&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Crontab", "fromLink": "Crontab/Crontab.html", "link": "Crontab/Crontab.html#method_getCrontabFileHandler", "name": "Crontab\\Crontab::getCrontabFileHandler", "doc": "&quot;Returns a Crontab File Handler&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Crontab", "fromLink": "Crontab/Crontab.html", "link": "Crontab/Crontab.html#method_setCrontabFileHandler", "name": "Crontab\\Crontab::setCrontabFileHandler", "doc": "&quot;Set the Crontab File Handler&quot;"},
            
            {"type": "Class", "fromName": "Crontab", "fromLink": "Crontab.html", "link": "Crontab/CrontabFileHandler.html", "name": "Crontab\\CrontabFileHandler", "doc": "&quot;Logic for reading and writing crontab files.&quot;"},
                                                        {"type": "Method", "fromName": "Crontab\\CrontabFileHandler", "fromLink": "Crontab/CrontabFileHandler.html", "link": "Crontab/CrontabFileHandler.html#method_parseExistingCrontab", "name": "Crontab\\CrontabFileHandler::parseExistingCrontab", "doc": "&quot;Parse an existing crontab&quot;"},
                    {"type": "Method", "fromName": "Crontab\\CrontabFileHandler", "fromLink": "Crontab/CrontabFileHandler.html", "link": "Crontab/CrontabFileHandler.html#method_parseFromFile", "name": "Crontab\\CrontabFileHandler::parseFromFile", "doc": "&quot;Reads cron jobs from a file.&quot;"},
                    {"type": "Method", "fromName": "Crontab\\CrontabFileHandler", "fromLink": "Crontab/CrontabFileHandler.html", "link": "Crontab/CrontabFileHandler.html#method_getError", "name": "Crontab\\CrontabFileHandler::getError", "doc": "&quot;Get crontab error&quot;"},
                    {"type": "Method", "fromName": "Crontab\\CrontabFileHandler", "fromLink": "Crontab/CrontabFileHandler.html", "link": "Crontab/CrontabFileHandler.html#method_getOutput", "name": "Crontab\\CrontabFileHandler::getOutput", "doc": "&quot;Get crontab output&quot;"},
                    {"type": "Method", "fromName": "Crontab\\CrontabFileHandler", "fromLink": "Crontab/CrontabFileHandler.html", "link": "Crontab/CrontabFileHandler.html#method_write", "name": "Crontab\\CrontabFileHandler::write", "doc": "&quot;Write the current crons in the cron table&quot;"},
                    {"type": "Method", "fromName": "Crontab\\CrontabFileHandler", "fromLink": "Crontab/CrontabFileHandler.html", "link": "Crontab/CrontabFileHandler.html#method_writeToFile", "name": "Crontab\\CrontabFileHandler::writeToFile", "doc": "&quot;Write the current crons to a file.&quot;"},
                    {"type": "Method", "fromName": "Crontab\\CrontabFileHandler", "fromLink": "Crontab/CrontabFileHandler.html", "link": "Crontab/CrontabFileHandler.html#method_getCrontabExecutable", "name": "Crontab\\CrontabFileHandler::getCrontabExecutable", "doc": "&quot;Get crontab executable location&quot;"},
                    {"type": "Method", "fromName": "Crontab\\CrontabFileHandler", "fromLink": "Crontab/CrontabFileHandler.html", "link": "Crontab/CrontabFileHandler.html#method_setCrontabExecutable", "name": "Crontab\\CrontabFileHandler::setCrontabExecutable", "doc": "&quot;Set unix user to add crontab&quot;"},
            
            {"type": "Class", "fromName": "Crontab", "fromLink": "Crontab.html", "link": "Crontab/Job.html", "name": "Crontab\\Job", "doc": "&quot;Represent a cron job&quot;"},
                                                        {"type": "Method", "fromName": "Crontab\\Job", "fromLink": "Crontab/Job.html", "link": "Crontab/Job.html#method___toString", "name": "Crontab\\Job::__toString", "doc": "&quot;To string&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Job", "fromLink": "Crontab/Job.html", "link": "Crontab/Job.html#method_parse", "name": "Crontab\\Job::parse", "doc": "&quot;Parse crontab line into Job object&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Job", "fromLink": "Crontab/Job.html", "link": "Crontab/Job.html#method_getEntries", "name": "Crontab\\Job::getEntries", "doc": "&quot;Get an array of job entries&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Job", "fromLink": "Crontab/Job.html", "link": "Crontab/Job.html#method_render", "name": "Crontab\\Job::render", "doc": "&quot;Render the job for crontab&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Job", "fromLink": "Crontab/Job.html", "link": "Crontab/Job.html#method_prepareComments", "name": "Crontab\\Job::prepareComments", "doc": "&quot;Prepare comments&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Job", "fromLink": "Crontab/Job.html", "link": "Crontab/Job.html#method_prepareLog", "name": "Crontab\\Job::prepareLog", "doc": "&quot;Prepare log&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Job", "fromLink": "Crontab/Job.html", "link": "Crontab/Job.html#method_prepareError", "name": "Crontab\\Job::prepareError", "doc": "&quot;Prepare log&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Job", "fromLink": "Crontab/Job.html", "link": "Crontab/Job.html#method_getErrorContent", "name": "Crontab\\Job::getErrorContent", "doc": "&quot;Return the error file content&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Job", "fromLink": "Crontab/Job.html", "link": "Crontab/Job.html#method_getLogContent", "name": "Crontab\\Job::getLogContent", "doc": "&quot;Return the log file content&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Job", "fromLink": "Crontab/Job.html", "link": "Crontab/Job.html#method_getLastRunTime", "name": "Crontab\\Job::getLastRunTime", "doc": "&quot;Return the last job run time&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Job", "fromLink": "Crontab/Job.html", "link": "Crontab/Job.html#method_getHash", "name": "Crontab\\Job::getHash", "doc": "&quot;Return the job unique hash&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Job", "fromLink": "Crontab/Job.html", "link": "Crontab/Job.html#method_setMinute", "name": "Crontab\\Job::setMinute", "doc": "&quot;Set the minute (* 1 1-10,11-20,30-59 1-59 *\\\/1)&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Job", "fromLink": "Crontab/Job.html", "link": "Crontab/Job.html#method_setHour", "name": "Crontab\\Job::setHour", "doc": "&quot;Set the hour&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Job", "fromLink": "Crontab/Job.html", "link": "Crontab/Job.html#method_setDayOfMonth", "name": "Crontab\\Job::setDayOfMonth", "doc": "&quot;Set the day of month&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Job", "fromLink": "Crontab/Job.html", "link": "Crontab/Job.html#method_setMonth", "name": "Crontab\\Job::setMonth", "doc": "&quot;Set the month&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Job", "fromLink": "Crontab/Job.html", "link": "Crontab/Job.html#method_setDayOfWeek", "name": "Crontab\\Job::setDayOfWeek", "doc": "&quot;Set the day of week&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Job", "fromLink": "Crontab/Job.html", "link": "Crontab/Job.html#method_setCommand", "name": "Crontab\\Job::setCommand", "doc": "&quot;Set the command&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Job", "fromLink": "Crontab/Job.html", "link": "Crontab/Job.html#method_setLastRunTime", "name": "Crontab\\Job::setLastRunTime", "doc": "&quot;Set the last job run time&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Job", "fromLink": "Crontab/Job.html", "link": "Crontab/Job.html#method_setComments", "name": "Crontab\\Job::setComments", "doc": "&quot;Set the comments&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Job", "fromLink": "Crontab/Job.html", "link": "Crontab/Job.html#method_setLogFile", "name": "Crontab\\Job::setLogFile", "doc": "&quot;Set the log file&quot;"},
                    {"type": "Method", "fromName": "Crontab\\Job", "fromLink": "Crontab/Job.html", "link": "Crontab/Job.html#method_setErrorFile", "name": "Crontab\\Job::setErrorFile", "doc": "&quot;Set the error file&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


