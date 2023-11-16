<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:math="http://www.w3.org/2005/xpath-functions/math"
    exclude-result-prefixes="xs math"
    version="3.0">
    
  <xsl:output method="text"/>
    <xsl:variable name="lotrXML" as="document-node()+" select="collection('source-xml/')"/>
    
    <xsl:template match="/">
       <xsl:for-each select="$lotrXML">
           <xsl:apply-templates/>
       </xsl:for-each>
        
    </xsl:template>
    
    
    
</xsl:stylesheet>