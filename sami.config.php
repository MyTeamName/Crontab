<?php

// generate documentation with Sami
// https://github.com/FriendsOfPHP/Sami

// run in command prompt:
// php sami.phar update sami.config.php

use Sami\Sami;
use Sami\Version\GitVersionCollection;

$src = __DIR__.'/src';

// need to generate cache separately for each tag/branch
// https://github.com/FriendsOfPHP/Sami/issues/219
$versions = GitVersionCollection::create(__DIR__)
    ->addFromTags('1.0.4')
;

return new Sami($src, [
	'versions'  => $versions,
	'build_dir' => __DIR__.'/docs/%version%',
	'cache_dir' => __DIR__.'/cache/%version%',
]);
