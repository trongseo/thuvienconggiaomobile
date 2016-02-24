<?php
/**
 * Created by PhpStorm.
 * User: nvtrong
 * Date: 11/4/14
 * Time: 10:20 AM
 */

class MyRule extends CBaseUrlRule
{
    public function parseUrl($oManager, $oRequest, $sPathInfo, $sRawPathInfo)
    {
        var_dump($oManager, $oRequest, $sPathInfo, $sRawPathInfo);
        // Extract database Id and article Id from $sPathInfo and perhaps put it in $_REQUEST
        if ("url isn't SEO thingy")
            return FALSE:
    return 'articles/index';
  }

    public function createUrl($oManager, $sRoute, $aParameters, $sAmpersand)
    {
        if ("i have an SEO item to show")
            return "/however you want to assemble your URL";
        return FALSE;
    }
}